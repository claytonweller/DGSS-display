export const preshowActionHash = {
  'preshow-answer': answerAction,
};

async function answerAction(params, component) {
  console.log('Answer');
  const prevState = component.state.moduleState;
  if (!prevState.answers) prevState.answers = [];
  if (params.interaction.response !== '-skip-') prevState.answers.push(params);
  component.setState({
    moduleState: {
      answers: prevState.answers,
    },
  });
}
