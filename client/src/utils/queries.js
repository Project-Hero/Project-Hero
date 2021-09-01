import { gql } from "@apollo/client";

export const QUERY_QUESTIONS = gql`
  query allQuestions {
    questions {
      _id
      category
      phrase
      value
    }
  }
`;
