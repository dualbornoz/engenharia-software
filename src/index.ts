 import { PrismaClient } from '@prisma/client';
import Fastify from 'fastify';


 const fastify = Fastify({logger: true});
 const prisma = new PrismaClient();

 fastify.get('/professores', async (request, reply) => {
    try {
      const professores = await prisma.professor.findMany();
      return professores;
    } catch (err) {
      if (err instanceof Error) {
        reply.status(500).send(err.message);
      } else {
        reply.status(500).send("Erro desconhecido");
      }
    }
  });

 fastify.post('/professores', async (request, reply) => {
    const {name, email} = request.body as {name: string, email: string};
    try{
    const professor = await prisma.user.create({
        data: {
            name, 
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
    const {name, email} = request.body as {name: string, email: string};
    try{
        const aluno = await prisma.aluno.create({
            data: {
                name,
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
                alunos: true,
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

 fastify.post('/diciplinas', async (request, reply) => {
    const {name, professorId, alunoId} = request.body as {name: string; professorId: number; alunoId: number[];} 
    try{
        const disciplina = await prisma.disciplina.create({
            data: {
                name,
                professor: {connect: {id: professorId}},
                alunos: {connect: alunoId.map(id => ({id}))},
            },
        });
        return disciplina;
    } catch (err){
        if (err instanceof Error){
            reply.status(500).send(err.message);
        } else {
            reply.status(500).send("Erro desconhecido");
        }
        
    }
 })

 const start = async () => {
    try {
        await fastify.listen({port: 3000});
        console.log(`Server running at port 3000`);
    } catch (err){
        fastify.log.error(err);
        process.exit(1);
    }
 };

 start();
