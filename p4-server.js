// Import Fastify library
const fastify = require('fastify')();

// Import your module
const {
  getQuestions,
  getAnswers,
  getQuestionsAnswers,
  getQuestion,
  getAnswer,
  getQuestionAnswer,
} = require('./p4-module.js');

// Route: /cit/question
fastify.get("/cit/question", (request, reply) => {
  reply
    .code(200)
    .header('Content-Type', 'application/json; charset=utf-8')
    .send({ error: "", statusCode: 200, questions: getQuestions() });
});

// Route: /cit/answer
fastify.get("/cit/answer", (request, reply) => {
  reply
    .code(200)
    .header('Content-Type', 'application/json; charset=utf-8')
    .send({ error: "", statusCode: 200, answers: getAnswers() });
});

// Route: /cit/questionanswer
fastify.get("/cit/questionanswer", (request, reply) => {
  reply
    .code(200)
    .header('Content-Type', 'application/json; charset=utf-8')
    .send({ error: "", statusCode: 200, questions_answers: getQuestionsAnswers() });
});

// Route: /cit/question/:number
fastify.get("/cit/question/:number", (request, reply) => {
  const question = getQuestion(request.params.number);
  reply
    .code(200)
    .header('Content-Type', 'application/json; charset=utf-8')
    .send({ error: question.error, statusCode: 200, question: question.question, number: request.params.number });
});

// Route: /cit/answer/:number
fastify.get("/cit/answer/:number", (request, reply) => {
  const answer = getAnswer(request.params.number);
  reply
    .code(200)
    .header('Content-Type', 'application/json; charset=utf-8')
    .send({ error: answer.error, statusCode: 200, answer: answer.answer, number: request.params.number });
});

// Route: /cit/questionanswer/:number
fastify.get("/cit/questionanswer/:number", (request, reply) => {
  const qa = getQuestionAnswer(request.params.number);
  reply
    .code(200)
    .header('Content-Type', 'application/json; charset=utf-8')
    .send({ error: qa.error, statusCode: 200, question: qa.question, answer: qa.answer, number: request.params.number });
});

// Unmatched route handler
fastify.all("*", (request, reply) => {
  reply
    .code(404)
    .header('Content-Type', 'application/json; charset=utf-8')
    .send({ error: "Route not found", statusCode: 404 });
});

// Start the server
const start = async () => {
  try {
    await fastify.listen(3000);
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();

