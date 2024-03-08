export function formatarData(data: string): string {
  const dataObj = new Date(data);
  const mes = dataObj.toLocaleString("pt-BR", { month: "short" });
  const ano = dataObj.getFullYear();
  return `${mes.toUpperCase()}/${ano}`;
}
export function formatarDataPT(data: string): string {
  const meses = [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ];
  const partesData = data.split("-"); // Dividir a data em partes
  const dataObj = new Date(
    `${partesData[0]}-${partesData[1]}-${partesData[2]}T00:00:00`
  );
  const mes = meses[dataObj.getMonth()];
  const ano = dataObj.getFullYear();
  return `${mes}/${ano}`;
}

export function formatarDataPTModal(data: string): string {
  const dataObj = new Date(data);
  const dia = ("0" + dataObj.getDate()).slice(-2);
  const mes = ("0" + (dataObj.getMonth() + 1)).slice(-2);
  const ano = dataObj.getFullYear();
  return `${dia}/${mes}/${ano}`;
}

export function converterData(data: string): string {
  const meses: string[] = [
    "JAN",
    "FEV",
    "MAR",
    "ABR",
    "MAI",
    "JUN",
    "JUL",
    "AGO",
    "SET",
    "OUT",
    "NOV",
    "DEZ",
  ];

  const [ano, mes] = data.split("-");
  const mesNumerico: number = parseInt(mes, 10) - 1;
  const mesTexto: string = meses[mesNumerico];

  return `${mesTexto}/${ano}`;
}
