import React, { useState } from "react";

const MemberDetail = ({ num, handleMember, member, max, min }) => {
  const [ageError, setAgeError] = useState(false);
  const normalStyle =
    "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline";
  const errorStyle =
    "shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline";
  const handleAge = (e) => {
    if (e.target.value > max || e.target.value < min) {
      setAgeError(true);
      return;
    }
    setAgeError(false);
  };

  return (
    <div className="flex w-full mt-3">
      <div className="flex items-center">#{num}</div>
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-first-name"
          name="name"
          onChange={(e) => handleMember(num - 1, e)}
        >
          Nombre
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-first-name"
          name="name"
          value={member.name}
          onChange={(e) => handleMember(num - 1, e)}
          type="text"
          placeholder="Nombre..."
        />
      </div>
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-first-name"
        >
          Posicion
        </label>
        <div class="relative">
          <select
            class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-state"
            name="position"
            value={member.position}
            defaultValue=""
            onChange={(e) => handleMember(num - 1, e)}
          >
            <option value="" disabled>
              Seleccione una posición...
            </option>
            <option value="Suplente">Suplente</option>
            <option value={"Portero"}>Portero</option>
            <option value={"Defensa central"}>Defensa central</option>
            <option value={"Defensa"}>Defensa</option>
            <option value={"Mediocentro"}>Mediocentro</option>
            <option value={"Delantero"}>Delantero</option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              class="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-first-name"
        >
          Número
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-first-name"
          name="number"
          value={member.number}
          onChange={(e) => handleMember(num - 1, e)}
          type="text"
          placeholder="Número..."
        />
      </div>
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-first-name"
        >
          Edad
        </label>
        <input
          className={ageError ? errorStyle : normalStyle}
          id="grid-first-name"
          name="age"
          onBlur={handleAge}
          onChange={(e) => handleMember(num - 1, e)}
          type="number"
          value={member.age}
          placeholder="Edad..."
        />

        {ageError ? (
          <p class="text-red-500 text-xs italic">
            Porfavor proporcione una edad entre {min} y {max}.
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default MemberDetail;
