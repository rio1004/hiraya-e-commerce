// import { useState, useEffect, useCallback, useMemo } from "react";
// import React from "react";

// const TodoItem = React.memo(
//   ({
//     item,
//     index,
//     isSelected,
//     onSelect,
//     onDragStart,
//     onDragOver,
//     onDrop,
//     onToggleDone,
//   }) => {
//     return (
//       <li
//         draggable
//         onDragStart={() => onDragStart(index)}
//         onDragOver={(e) => onDragOver(e)}
//         onDrop={() => onDrop(index)}
//         className="flex items-center gap-2 p-2 border rounded cursor-move bg-white"
//       >
//         <input
//           type="checkbox"
//           checked={isSelected}
//           onChange={() => onSelect(item.id)}
//         />

//         <input
//           type="checkbox"
//           checked={item.done}
//           onChange={() => onToggleDone(item.id)}
//         />

//         <span className={item.done ? "line-through text-gray-500" : ""}>
//           {item.value}
//         </span>
//       </li>
//     );
//   },
// );

// export default function MainPage() {
//   const [items, setItems] = useState(() => {
//     const saved = localStorage.getItem("todos");
//     return saved
//       ? JSON.parse(saved)
//       : [
//           { id: "1", value: "Learn React", done: false },
//           { id: "2", value: "Prepare interview", done: false },
//         ];
//   });

//   const [input, setInput] = useState("");
//   const [selectedIds, setSelectedIds] = useState([]);
//   const [dragIndex, setDragIndex] = useState(null);

//   useEffect(() => {
//     localStorage.setItem("todos", JSON.stringify(items));
//   }, [items]);

//   // ---------- CRUD ----------
//   const addItem = () => {
//     if (!input.trim()) return;
//     setItems((prev) => [
//       ...prev,
//       { id: crypto.randomUUID(), value: input.trim(), done: false },
//     ]);
//     setInput("");
//   };

//   const toggleDone = useCallback((id) => {
//     setItems((prev) =>
//       prev.map((i) => (i.id === id ? { ...i, done: !i.done } : i)),
//     );
//   }, []);

//   // ---------- BULK ----------
//   const toggleSelect = (id) => {
//     setSelectedIds((prev) =>
//       prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
//     );
//   };

//   const bulkDelete = () => {
//     setItems((prev) => prev.filter((i) => !selectedIds.includes(i.id)));
//     setSelectedIds([]);
//   };

//   const bulkDone = () => {
//     setItems((prev) =>
//       prev.map((i) => (selectedIds.includes(i.id) ? { ...i, done: true } : i)),
//     );
//     setSelectedIds([]);
//   };

//   // ---------- DRAG & DROP ----------
//   const onDragStart = (index) => setDragIndex(index);

//   const onDragOver = (e) => e.preventDefault();

//   const onDrop = (dropIndex) => {
//     if (dragIndex === null) return;

//     setItems((prev) => {
//       const copy = [...prev];
//       const [moved] = copy.splice(dragIndex, 1);
//       copy.splice(dropIndex, 0, moved);
//       return copy;
//     });

//     setDragIndex(null);
//   };

//   // ---------- MEMO ----------
//   const selectedCount = useMemo(() => selectedIds.length, [selectedIds]);

//   return (
//     <div className="h-screen flex justify-center items-center bg-gray-100">
//       <div className="w-96 bg-white p-4 rounded shadow flex flex-col gap-3">
//         <h2 className="text-lg font-bold">Todo List</h2>

//         {/* Bulk Actions */}
//         {selectedCount > 0 && (
//           <div className="flex gap-2 text-sm">
//             <button onClick={bulkDone} className="border px-2 py-1 rounded">
//               Mark Done
//             </button>
//             <button
//               onClick={bulkDelete}
//               className="border px-2 py-1 rounded text-red-600"
//             >
//               Delete ({selectedCount})
//             </button>
//           </div>
//         )}

//         {/* List */}
//         <ul className="flex flex-col gap-2">
//           {items.map((item, index) => (
//             <TodoItem
//               key={item.id}
//               item={item}
//               index={index}
//               isSelected={selectedIds.includes(item.id)}
//               onSelect={toggleSelect}
//               onDragStart={onDragStart}
//               onDragOver={onDragOver}
//               onDrop={onDrop}
//               onToggleDone={toggleDone}
//             />
//           ))}
//         </ul>

//         {/* Add */}
//         <div className="flex gap-2">
//           <input
//             className="border p-1 flex-1"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             placeholder="Add item"
//           />
//           <button onClick={addItem} className="border px-3 rounded">
//             Add
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
