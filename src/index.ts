"use strict";

const Fastify = require("fastify");
const fastifyTypes = require('fastify').default;
const { FastifyRequest, FastifyReply } = fastifyTypes;
const PrismaClient = require("@prisma/client");

const fastify = Fastify({logger: true});
const prisma = new PrismaClient();

fastify.register(require('fastify-cors'), {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
});

 /*
fastify.get('/professores', async (request, reply) => {
  try {
    const professores = await prisma.professor.findMany();
    return professores;
  } catch (err) {
    fastify.log.error(err); // log the error using Fastify's logger
    reply.status(500).send("Erro desconhecido");
  }
});

 
 fastify.post('/professores', async (request, reply) => {
    const {nome, email} = request.body as {nome: string, email: string};
    try{
    const professor = await prisma.professor.create({
        data: {
            nome, 
            email,
        },
    });
    return professor;
    } catch (err){
        if (err instanceof Error){
            reply.status(500).send(err.message);
        } else {
            reply.status(500).send("Erro desconhecido");
        }
        
    }
 });

 fastify.get('/alunos', async (request, reply) => {
    try{
        const alunos = await prisma.aluno.findMany();
        return alunos;
    } catch (err){
        if (err instanceof Error){
            reply.status(500).send(err.message);
        } else {
            reply.status(500).send("Erro desconhecido");
        }
    }
 });

 fastify.post('/alunos', async (request, reply) => {
    const {nome, email} = request.body as {nome: string, email: string};
    try{
        const aluno = await prisma.aluno.create({
            data: {
                nome,
                email,
            },
        });
        return aluno;
    } catch (err){
        if (err instanceof Error){
            reply.status(500).send(err.message);
        } else {
            reply.status(500).send("Erro desconhecido");
        }
        
    }
 });

 fastify.get('/disciplinas', async (request, reply) => {
    try{
        const disciplinas = await prisma.disciplina.findMany({
            include: {
                professor: true,
                aluno: true,
            },
        });
        return disciplinas;
    } catch (err){
        if (err instanceof Error){
            reply.status(500).send(err.message);
        } else {
            reply.status(500).send("Erro desconhecido");
        }
        
    }
 });

 fastify.post('/disciplinas', async (request, reply) => {
    const { nome, professorId, alunoId } = request.body as { nome: string; professorId: number; alunoId: number };
    try {
        const disciplina = await prisma.disciplina.create({
            data: {
                nome,
                professor: { connect: { id: professorId } },
                aluno: { connect: {id: alunoId} } ,
            },
        });
        return disciplina;
    } catch (err) {
        if (err instanceof Error) {
            reply.status(500).send(err.message);
        } else {
            reply.status(500).send("Erro desconhecido");
        }
    }
});
*/
 const start = async () => {
    try {
        await fastify.listen({port: 3000});
        console.log(`Server running at port 5174`);
    } catch (err){
        fastify.log.error(err);
        process.exit(1);
    }
 };

 start();
 export default fastify;
