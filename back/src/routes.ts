import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from "fastify";
import { CreateNutricionController } from "./Controllers/CreateNutricionController";



export async function routes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) {
  fastify.get("/teste", (request: FastifyRequest, reply: FastifyReply) => {
    console.log("ROTA CHAMADA");
    
    reply.send({ ok: true });
  });

  fastify.post("/create",async (request: FastifyRequest, reply: FastifyReply) => {
    return new CreateNutricionController().handle(request, reply)
  });
}
