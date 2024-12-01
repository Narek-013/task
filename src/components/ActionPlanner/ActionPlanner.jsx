import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addRow, updateRow } from "../../store/slices/actionPlannerSlice/actionPlannerSlice";
import { fetchResponseForRow } from "../../store/slices/actionPlannerSlice/API";
import { getValue } from "../../store/slices/modalSlice/modalSlice";
import "./actionPlanner.scss";

const ActionPlanner = () => {
  const dispatch = useDispatch();
  const { data, loadingRow, responses } = useSelector((state) => state.actionPlanner);

  const handleAddRow = () => {
    dispatch(addRow());
  };

  const handleInputChange = (index, field, value) => {
    dispatch(updateRow({ index, field, value }));
  };

 const handleRowSubmit = (index) => {
   const row = data[index];
   const isEmpty = Object.values(row).some((field) => {
     return typeof field === "string" && field.trim() === "";
   });

   if (isEmpty) {
     alert("Please fill out all fields in the row before submitting.");
     return;
   }
   dispatch(fetchResponseForRow({ index, row }));
 };

 const isOpen = (resp) => {
    window.scrollTo({top:0})
    dispatch(getValue(resp));
 };


  return (
    <div className={"action-planner"}>
      <div className="action-planner__container container">
        <h1>Action Planner</h1>
        <table className={"action-planner__table"}>
          <thead className={"action-planner__head"}>
            <tr className="action-planner__media">
              <th>No</th>
              <th>Category</th>
              <th>Objective</th>
              <th>Action</th>
              <th>Dependencies</th>
              <th>Prerequisites</th>
              <th>Priority</th>
              <th>Risks and Mitigation</th>
              <th>Frequency</th>
              <th>Response</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className={"action-planner__body"}>
            {data.map((row, index) => (
              <tr key={index} className={"action-planner__row"}>
                <td>{row.no}</td>
                <td>
                  <input type="text" required value={row.category} onChange={(e) => handleInputChange(index, "category", e.target.value)} />
                </td>
                <td>
                  <input
                    type="text"
                    required
                    value={row.objective}
                    onChange={(e) => handleInputChange(index, "objective", e.target.value)}
                  />
                </td>
                <td>
                  <input type="text" required value={row.action} onChange={(e) => handleInputChange(index, "action", e.target.value)} />
                </td>
                <td>
                  <input
                    type="text"
                    required
                    value={row.dependencies}
                    onChange={(e) => handleInputChange(index, "dependencies", e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    required
                    value={row.prerequisites}
                    onChange={(e) => handleInputChange(index, "prerequisites", e.target.value)}
                  />
                </td>
                <td>
                  <select value={row.priority} onChange={(e) => handleInputChange(index, "priority", e.target.value)}>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                </td>
                <td>
                  <input
                    type="text"
                    required
                    value={row.risksAndMitigation}
                    onChange={(e) => handleInputChange(index, "risksAndMitigation", e.target.value)}
                  />
                </td>
                <td>
                  <select value={row.frequency} onChange={(e) => handleInputChange(index, "frequency", e.target.value)}>
                    <option value="One-time">One-time</option>
                    <option value="Recurring">Recurring</option>
                  </select>
                </td>
                {responses[index] ? <td><button onClick={() => isOpen(responses[index])}>Open</button></td> : <td>"N/A"</td>}
                <td>
                  <button onClick={() => handleRowSubmit(index)} disabled={loadingRow === index}>
                    {loadingRow === index ? "Loading..." : "Submit"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={handleAddRow}>Add Row</button>
      </div>
    </div>
  );
};

export default ActionPlanner;
