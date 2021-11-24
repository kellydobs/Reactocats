import React from 'react'

type ArticleProps = {
  name: string
  img: string
  number: string
}

export function Article(props: ArticleProps) {
  return (
    <article>
      <a href="">
        <img src={props.img} width="360" height="400" alt="" />
      </a>
      <ul>
        <li>
          #{props.number}:
          <a href="">
            <strong>{props.name}</strong>
          </a>
        </li>
        <li>
          <a href="https://github.com/kimestoesta">
            <img
              src="https://github.com/kimestoesta.png"
              width="24px"
              height="24px"
              alt="kimstoesta"
            />
          </a>
          <a href="https://github.com/heyhayhay">
            <img
              src="https://github.com/heyhayhay.png"
              width="24px"
              height="24px"
              alt="heyhayhay"
            />
          </a>
        </li>
      </ul>
    </article>
  )
}
