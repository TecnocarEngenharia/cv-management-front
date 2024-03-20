
import { CardCandidates } from "../../components/CardCandidates";

import { useAxiosCandidate } from "../../hooks/requestAxios";
import * as C from "./style";

const CandidatesEvaluated = () => {
  const { data } = useAxiosCandidate(
    import.meta.env.VITE_GET_USERS_EVALUATED
  );
  const isValidData = Array.isArray(data) && data.length > 0;

  return (
    <C.Container>
      {isValidData ? (
        <CardCandidates currentData={data} availiado={true} />
      ) : (
        <h1> Todos candidatos estão avaliados</h1>
      )}
    </C.Container>
  );
};

export { CandidatesEvaluated };
