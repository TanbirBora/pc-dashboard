const SHEET_ID = "1CGPkZMvXf7v4H1f0AdigX6oM6qxN5RWjz5-mmhGCmYY";
const SHEET_NAME = "Creator";

const url = `https://docs.google.com/spreadsheets/d/1Y1KvTCzKQ-san-MiXFQofVResbzGDBNFTQRZ0tmqsDI/gviz/tq?tqx=out:json&sheet=Jio Comparision Plans
`;

document.getElementById("loadBtn").onclick = () => {
  fetch(url)
    .then(r => r.text())
    .then(t => {
      const json = JSON.parse(t.substring(47).slice(0, -2));
      document.getElementById("total").innerText =
        json.table.rows[0].c[0].v;
    });
};
