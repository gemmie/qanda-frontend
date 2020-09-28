import React, { FC } from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { gray5, accent2 } from "./Styles";
import { QuestionData } from "./QuestionsData";
import { Question } from "./Question";

interface Props {
  data: QuestionData[];
  renderItem?: (item: QuestionData) => JSX.Element;
}

export const QuestionList: FC<Props> = ({ data, renderItem }) => (
  <ul
    css={css`
      list-style: none;
      margin: 10px 0 0 0;
      padding: 0px 20px;
      background-color: #fff;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      border-top: 3px solid ${accent2};
      box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
    `}
  >
    {data.map((q) => (
      <li
        key={q.questionId}
        css={css`
          border-top: 1px solid ${gray5};
          :first-of-type {
            border-top: none;
          }
        `}
      >
        {renderItem ? renderItem(q) : <Question data={q} />}
      </li>
    ))}
  </ul>
);
