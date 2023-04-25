import { useState } from "react";

import { RiUserSettingsLine } from "react-icons/ri";
import { AiFillMinusCircle } from 'react-icons/ai'
import PersonnelEdit from "./PersonnelEdit";
import PersonnelAdd from "./PersonnelAdd";

const peopleList = [
  {
    name: "محمد",
    lastName: "بهرامی",
    pNumber: "670531",
    nNumber: "1819221830",
    workGroup: "1",
    retired: false,
  },
  {
    name: "احمد",
    lastName: "محمدی",
    pNumber: "711234",
    nNumber: "1758876541",
    workGroup: "1",
    retired: false,
  },
];

const Personnel = () => {
  const [people, setPeople] = useState(peopleList);

  const [editMode, setEditMode] = useState(false);

  const [addMode, setAddMode] = useState(false);

  const [editModeState, setEditModeState] = useState({});

  const editUserHandler = (person) => {
    setEditModeState(person);
    setEditMode(true);
  };

  const changeRetiredStateHandler = (nationalNumber) => {
    const newPeople = people.map((person) => {
      if (person.nNumber === nationalNumber) {
        return { ...person, retired: !person.retired };
      }
      return person;
    });

    setPeople(newPeople);
  };

  const addPersonHandler = () => {

  }

  const removePersonnelHandler = (nationalNumber) => {
    const newList = people.filter((person) => person.nNumber !== nationalNumber)

    setPeople(newList)
  }

  return (
    <>
      <div className="h-fit w-full p-4">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h1 className="text-xl font-semibold text-gray-900">پرسنل</h1>
              <p className="mt-2 text-sm text-gray-700">جدول مشخصات پرسنل</p>
            </div>
            <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
              >
                افزودن پرسنل
              </button>
            </div>
          </div>
          <div className="mt-8 flex flex-col">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-center text-sm font-semibold text-gray-900 sm:pl-6"
                        >
                          نام
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                        >
                          نام خانوادگی
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                        >
                          شماره پرسنلی
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                        >
                          کد ملی
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                        >
                          دسته ی کاری
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                        >
                          وضعیت
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {people.map((person) => (
                        <tr
                          key={person.nNumber}
                          className="duration-50 transition-all ease-in hover:bg-gray-100"
                        >
                          <td
                            className="relative whitespace-nowrap py-4 pl-4 pr-3 text-center text-sm font-medium text-gray-900 sm:pl-6"
                          >
                            <AiFillMinusCircle onClick={() => removePersonnelHandler(person.nNumber)} className="absolute right-4 text-red-500 cursor-pointer" />
                            {person.name}
                          </td>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-center text-sm font-medium text-gray-900 sm:pl-6">
                            {person.lastName}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-500">
                            {person.pNumber}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-500">
                            {person.nNumber}
                          </td>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-center text-sm font-medium text-gray-900 sm:pl-6">
                            {person.workGroup}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-500">
                            <span
                              className={`mx-auto flex w-20 items-center justify-center rounded-full ${
                                person.retired
                                  ? "bg-red-500 text-white"
                                  : "bg-green-400"
                              }`}
                            >
                              {person.retired ? "بازنشسته" : "فعال"}
                            </span>
                          </td>
                          <td>
                            <RiUserSettingsLine
                              onClick={() => editUserHandler(person)}
                              className="cursor-pointer transition-all duration-200 ease-in hover:text-green-400"
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {editMode && (
        <div
          id="backDrop"
          className="fixed inset-0 z-20 flex items-center justify-center bg-black/50"
        >
          <PersonnelEdit
            switchHandler={changeRetiredStateHandler}
            personData={editModeState}
          />
        </div>
      )}

      {addMode && (
        <div
          id="backDrop"
          className="fixed inset-0 z-20 flex items-center justify-center bg-black/50"
        >
          <PersonnelAdd />
        </div>
      )}
    </>
  );
};

export default Personnel;
