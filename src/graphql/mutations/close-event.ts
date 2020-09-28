import gql from 'graphql-tag';
import {useMutation} from "@apollo/react-hooks";

export interface Variables {
  id: number;
  petId?: number;
}

//Todo - add the mutation here
//const CLOSE_EVENT = gql``;

const useCloseEvent = () => {
  return useMutation<{}, Variables>(CLOSE_EVENT);
};

export {useCloseEvent};
