import type { FastifyInstance } from "fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import dayjs from "dayjs";
import "dayjs/locale/pt-br"
import localizedFormat from "dayjs/plugin/localizedFormat"
import { z } from "zod";

dayjs.locale('pt-br');
dayjs.extend(localizedFormat);

export async function confirmTrip(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().get('/trips/:tripId/confirm', {
    schema: {
      params: z.object({
        tripId: z.string().uuid()
      })
    }
  },
    async (request) => {
      const { tripId } = request.params

      return { tripId };
    });
}