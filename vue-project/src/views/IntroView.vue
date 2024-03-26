<template>
  <div class="greetings">
    <h1 class="green">AI Portfolio - Oscar Pergler</h1>
    <h3>
      Welcome to my portfolio bot, ask me anything! The AI will try to answer any question it can.
    </h3>
    <h4>
      Don't feel like chatting? Check out my LinkedIn and GitHub:
      <ul>
        <li><a href="https://www.linkedin.com/in/oscar-pergler-99bb4a259/" target="_blank" rel="noopener">LinkedIn</a></li>
        <li><a href="https://github.com/oscarpergler" target="_blank" rel="noopener">GitHub</a></li>
      </ul>
    </h4>
    <p class="note">I do not take responsibility of anything the "Assistant" says or is prompted to say. This app uses the OpenAI API and aims to answer questions based on information that I have provided it. It may give answers that are completely wrong.</p>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
}

h3 {
  font-size: 1.2rem;
}

h4{
  margin-top: 20px;
}

li{
  font-size: 1.2rem;
}

.greetings{
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.greetings h1,
.greetings h3 {
  text-align: left;
}

.note{
  margin-top: 100px;
  font-style: italic;
  color: rgb(56, 56, 56);
  font-size: 0.8rem;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
