<template>
  <section class="w-[60%] mt-8">
    <h3 class="text-xl font-semibold">Data & Software</h3>
    <ul>
      <li>
        <a href="https://pypi.org/project/cellar-extractor/">CJEU extractor</a>
        <p>
          Extracts case law of the Court of Justice of the European Union (CJEU). Data
          source: CELLAR / EUR-Lex
        </p>
      </li>

      <li>
        <a href="https://pypi.org/project/echr-extractor/">ECHR extractor</a>
        <p>Extracts case law of the European Court of Human Rights (ECHR)</p>
      </li>

      <li>
        <a href="https://pypi.org/project/rechtspraak-extractor/"
          >Rechtspraak extractor</a
        >
        <p>Extracts case law of the Netherlands (Rechtspraak)</p>
      </li>
    </ul>

    <h3 class="text-xl font-semibold mt-8">Pre-Processing</h3>
    <ul>
      <li>
        <a href="https://lawnotation-demo.vercel.app/">Article splitter (EU)</a>
        <p>
          Splits legislation of the European Commission into articles
        </p>
      </li>
    </ul>
  </section>
</template>

<style scoped>
a {
  text-decoration-line: underline;
}
li {
  margin-top: 1.5rem;
}
li:first-of-type {
  margin-top: 1rem;
}
</style>