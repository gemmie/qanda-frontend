import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { PrimaryButton } from "./Styles";
import { QuestionList } from "./QuestionList";
import { getUnasweredQuestions } from "./QuestionsData";
import { Page } from "./Page";
import { PageTitle } from "./PageTitle";

export const HomePage = () => (
  <Page>
    <div
      css={css`
        display: flex;
        align-items: center;
        justify-content: space-between;
      `}
    >
      <PageTitle>Unaswered Questions</PageTitle>
      <PrimaryButton>Ask a question</PrimaryButton>
    </div>
    <QuestionList data={getUnasweredQuestions()} />
  </Page>
);
