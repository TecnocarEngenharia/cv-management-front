import { useState, useEffect } from "react";
import { CardCandidates } from "../../components/CardCandidates";

import { useAxiosCandidate } from "../../hooks/requestAxios";
import * as C from "./style";

const CandidatesEvaluated = () => {
  const { data, refetch } = useAxiosCandidate(
    import.meta.env.VITE_GET_USERS_EVALUATED
  );
  const isValidData = Array.isArray(data) && data.length > 0;

  const [_updatedData, setUpdatedData] = useState(data);
  useEffect(() => {
    setUpdatedData(data);
    refetch(); 
  }, [data, refetch]);

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
