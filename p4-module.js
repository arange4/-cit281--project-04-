const { data } = require('./p4-data.js');

function getQuestions() {
    return data.map(item => item.question);
}

function getAnswers() {
    return data.map(item => item.answer);
}

function getQuestionsAnswers() {
    return JSON.parse(JSON.stringify(data)); // deep clone
}

function getQuestion(number = "") {
    const num = parseInt(number);
    if (isNaN(num)) {
        return { question: '', number: '', error: 'Question number must be an integer' };
    }
    const item = data[num - 1];
    return item 
        ? { question: item.question, number: num, error: '' }
        : { question: '', number: num, error: 'Question not found' };
}

function getAnswer(number = "") {
    const num = parseInt(number);
    if (isNaN(num)) {
        return { answer: '', number: '', error: 'Answer number must be an integer' };
    }
    const item = data[num - 1];
    return item 
        ? { answer: item.answer, number: num, error: '' }
        : { answer: '', number: num, error: 'Answer not found' };
}

function getQuestionAnswer(number = "") {
    const num = parseInt(number);
    if (isNaN(num)) {
        return { question: '', answer: '', number: '', error: 'Question number must be an integer' };
    }
    const item = data[num - 1];
    return item 
        ? { question: item.question, answer: item.answer, number: num, error: '' }
        : { question: '', answer: '', number: num, error: 'Question/Answer not found' };
}

module.exports = {
    getQuestions,
    getAnswers,
    getQuestionsAnswers,
    getQuestion,
    getAnswer,
    getQuestionAnswer,
};

/*****************************
  Module function testing
******************************/
function testing(category, ...args) {
  console.log(`\n** Testing ${category} **`);
  console.log("-------------------------------");
  for (const o of args) {
    console.log(`-> ${category}${o.d}:`);
    console.log(o.f);
  }
}

// Set a constant to true to test the appropriate function
const testGetQs = false;
const testGetAs = false;
const testGetQsAs = false;
const testGetQ = false;
const testGetA = false;
const testGetQA = false;

// getQuestions()
if (testGetQs) {
  testing("getQuestions", { d: "()", f: getQuestions() });
}

// getAnswers()
if (testGetAs) {
  testing("getAnswers", { d: "()", f: getAnswers() });
}

// getQuestionsAnswers()
if (testGetQsAs) {
  testing("getQuestionsAnswers", { d: "()", f: getQuestionsAnswers() });
}

// getQuestion()
if (testGetQ) {
  testing(
    "getQuestion",
    { d: "()", f: getQuestion() },      // Extra credit: +1
    { d: "(0)", f: getQuestion(0) },    // Extra credit: +1
    { d: "(1)", f: getQuestion(1) },
    { d: "(4)", f: getQuestion(4) }     // Extra credit: +1
  );
}

 // getAnswer()
if (testGetA) {
    testing(
      "getAnswer",
      { d: "()", f: getAnswer() },        // Extra credit: +1
      { d: "(0)", f: getAnswer(0) },      // Extra credit: +1
      { d: "(1)", f: getAnswer(1) },
      { d: "(4)", f: getAnswer(4) }       // Extra credit: +1
    );
  }
     
  module.exports = {
    getQuestions,
    getAnswers,
    getQuestionsAnswers,
    getQuestion,
    getAnswer,
    getQuestionAnswer
};

