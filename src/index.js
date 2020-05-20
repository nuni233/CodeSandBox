import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

console.log("Hello world !!!");

const data = [
  {
    $id: "2",
    StatusHistoryID: 125370,
    StatusCode: 0,
    StopReasonName: "",
    StopReasonID: 0,
    DisqualificationReasonName: "",
    DisqualificationReasonID: 0,
    DefectedQuantity: 0,
    MaterialName: "סלסלה מיני ( 2 ) עגמי הזרקות ממכונה",
    WorkOrderNumber: "000363",
    WorkOrderID: 1955,
    ReasonsPath: "",
    ReasonsPathIDs: "",
    Time: "2020-05-20T07:00:00",
    TimeEnd: "2020-05-20T07:20:13",
    Status: "ייצור",
    Color: "#00FF00"
  },
  {
    $id: "3",
    StatusHistoryID: 125397,
    StatusCode: 0,
    StopReasonName: "",
    StopReasonID: 0,
    DisqualificationReasonName: "",
    DisqualificationReasonID: 0,
    DefectedQuantity: 0,
    MaterialName: "סלסלה מיני ( 2 ) עגמי הזרקות ממכונה",
    WorkOrderNumber: "000363",
    WorkOrderID: 1955,
    ReasonsPath: "",
    ReasonsPathIDs: "",
    Time: "2020-05-20T07:20:13",
    TimeEnd: "2020-05-20T07:27:11",
    Status: "מופסק",
    Color: "#C0C0C0"
  }
];

let { Color, WorkOrderID } = data[0];
const out = {
  // ObjectKey:
  Color: Color,
  WorkOrderID: WorkOrderID
};
const forTable = [];
const temp = Object.keys(out).forEach(key => {
  const tt = {
    ObjectKey: key,
    name: key,
    value: out[key]
  };
  forTable.push(tt);
  console.log(tt);
});
console.log(JSON.stringify(forTable));
