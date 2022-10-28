"use client";

export default function Vibration() {
  // const vibrate = () => {
  //   if (navigator.vibrate) {
  //     navigator.vibrate([200, 100, 200]);
  //   } else {
  //     alert("Does not support vibration");
  //   }
  // };
  return (
    <>
      <div className="container">
        <h1 className="mt-3">Vibration</h1>
        <div className="mt-4">
          <button className="btn btn-success">Vibrate</button>
        </div>
      </div>
    </>
  );
}
