"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@prisma/client");
var fastify_1 = require("fastify");
var fastify = (0, fastify_1.default)({ logger: true });
var prisma = new client_1.PrismaClient();
const cors = require("@fastify/cors");

fastify.register(cors, {
    origin: '*',
    methods: ['GET', 'PUT', 'PATCH', 'POST', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });

fastify.get('/professores', function (request, reply) { return __awaiter(void 0, void 0, void 0, function () {
    var professores, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, prisma.professor.findMany()];
            case 1:
                professores = _a.sent();
                return [2 /*return*/, professores];
            case 2:
                err_1 = _a.sent();
                if (err_1 instanceof Error) {
                    reply.status(500).send(err_1.message);
                }
                else {
                    reply.status(500).send("Erro desconhecido");
                }
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
fastify.post('/professores', function (request, reply) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, nome, email, professor, err_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = request.body, nome = _a.nome, email = _a.email;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, prisma.professor.create({
                        data: {
                            nome: nome,
                            email: email,
                        },
                    })];
            case 2:
                professor = _b.sent();
                return [2 /*return*/, professor];
            case 3:
                err_2 = _b.sent();
                if (err_2 instanceof Error) {
                    reply.status(500).send(err_2.message);
                }
                else {
                    reply.status(500).send("Erro desconhecido");
                }
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
fastify.get('/alunos', function (request, reply) { return __awaiter(void 0, void 0, void 0, function () {
    var alunos, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, prisma.aluno.findMany()];
            case 1:
                alunos = _a.sent();
                return [2 /*return*/, alunos];
            case 2:
                err_3 = _a.sent();
                if (err_3 instanceof Error) {
                    reply.status(500).send(err_3.message);
                }
                else {
                    reply.status(500).send("Erro desconhecido");
                }
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
fastify.post('/alunos', function (request, reply) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, nome, email, aluno, err_4;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = request.body, nome = _a.nome, email = _a.email;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, prisma.aluno.create({
                        data: {
                            nome: nome,
                            email: email,
                        },
                    })];
            case 2:
                aluno = _b.sent();
                return [2 /*return*/, aluno];
            case 3:
                err_4 = _b.sent();
                if (err_4 instanceof Error) {
                    reply.status(500).send(err_4.message);
                }
                else {
                    reply.status(500).send("Erro desconhecido");
                }
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
fastify.get('/disciplinas', function (request, reply) { return __awaiter(void 0, void 0, void 0, function () {
    var disciplinas, err_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, prisma.disciplina.findMany({
                        include: {
                            professor: true,
                            aluno: true,
                        },
                    })];
            case 1:
                disciplinas = _a.sent();
                return [2 /*return*/, disciplinas];
            case 2:
                err_5 = _a.sent();
                if (err_5 instanceof Error) {
                    reply.status(500).send(err_5.message);
                }
                else {
                    reply.status(500).send("Erro desconhecido");
                }
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
fastify.post('/disciplinas', function (request, reply) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, nome, professorId, alunoId, disciplina, err_6;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = request.body, nome = _a.nome, professorId = _a.professorId, alunoId = _a.alunoId;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, prisma.disciplina.create({
                        data: {
                            nome: nome,
                            professor: { connect: { id: professorId } },
                            aluno: { connect: { id: alunoId } },
                        },
                    })];
            case 2:
                disciplina = _b.sent();
                return [2 /*return*/, disciplina];
            case 3:
                err_6 = _b.sent();
                if (err_6 instanceof Error) {
                    reply.status(500).send(err_6.message);
                }
                else {
                    reply.status(500).send("Erro desconhecido");
                }
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
var start = function () { return __awaiter(void 0, void 0, void 0, function () {
    var err_7;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, fastify.listen({ port: 3000 })];
            case 1:
                _a.sent();
                console.log("Server running at port 3000");
                return [3 /*break*/, 3];
            case 2:
                err_7 = _a.sent();
                fastify.log.error(err_7);
                process.exit(1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
start();
exports.default = fastify;
