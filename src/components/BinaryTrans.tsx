import { useState } from "react";

const BinaryTrans = () => {
  const [valueBin, setValueBin] = useState("");
  const [valueAlp, setValueAlp] = useState("");
  const [dis, setDis] = useState(false);
  const [dis1, setDis1] = useState(false);

  const alpTrans = (e) => {
    if (e !== "") {
      setDis(true);
    }
    setValueBin(e);
    let binaryResult = "";

    for (let i = 0; i < e.length; i++) {
      const binaryChar = e.charCodeAt(i).toString(2);

      const paddedBinaryChar = "00000000".slice(binaryChar.length) + binaryChar;

      binaryResult += paddedBinaryChar;

      if (i < e.length - 1) {
        binaryResult += " ";
      }
    }

    setValueAlp(binaryResult);
    console.log(binaryResult);
  };

  const binTrans = (e) => {
    setValueBin(e);
    if (e !== "") {
      setDis1(true);
    }
    e = e.replace(/\s/g, "");
    if (e.length % 8 !== 0) {
      setValueBin('Invalid binary string length')
      throw new Error("Invalid binary string length");
    }

    const binaryChunks = e.match(/.{8}/g);

    const textResult = binaryChunks.map((chunk) =>
      String.fromCharCode(parseInt(chunk, 2))
    );

    let result = textResult.join("");
    setValueBin(result);
  };

  return (
    <>
      <button className="clear-button" onClick={() => location.href = location.href}>
        Clear
      </button>
      <div className="binary-container">
        <textarea
          name="textarea"
          disabled={dis1}
          onChange={(e) => alpTrans(e.target.value)}
          placeholder="To Alphabet:"
        >
          {valueBin}
        </textarea>
        <p className="translated-alp" style={{ display: dis1 ? "" : "none" }}>
          {valueBin}
        </p>
        <textarea
          name="textarea"
          disabled={dis}
          onChange={(e) => binTrans(e.target.value)}
          placeholder="To Binary:"
        >
          {valueAlp}
        </textarea>
        <p className="translated-binar" style={{ display: dis ? "" : "none" }}>
          {valueAlp}
        </p>
      </div>
    </>
  );
};

export default BinaryTrans;
