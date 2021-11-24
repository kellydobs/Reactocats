import React from 'react'
import { Article } from './article'

export function MainSection() {
  return (
    <main>
      <section>
        <Article
          name="Terracottocat"
          img="http://octodex.github.com//images/Terracottocat_Single.png"
          number="149"
        />
        <Article
          name="Octogatos"
          img="http://octodex.github.com//images/Octogatos.png"
          number="148"
        />
        <Article
          name="Sentrytocat"
          img="http://octodex.github.com//images/Sentrytocat_octogex.jpg"
          number="143"
        />
        <Article
          name="Boxertocat"
          img="http://octodex.github.com//images/boxertocat_octodex.jpg"
          number="141"
        />
        <Article
          name="Surftocat"
          img="http://octodex.github.com//images/surtocat.png"
          number="140"
        />
        <Article
          name="Scubatocat"
          img="http://octodex.github.com//images/scubatocat.png"
          number="138"
        />
        <Article
          name="Dinotocat"
          img="http://octodex.github.com//images/dinotocat.png"
          number="130"
        />
        <Article
          name="Spidertocat"
          img="http://octodex.github.com//images/spidertocat.png"
          number="88"
        />
      </section>
    </main>
  )
}
