import ComboBoxComponent from "../utils/ComboBox";
import SwitchToggle from "../utils/SwitchToggle";

const groups = [
  { id: 1, name: "دسته ی کاری اول" },
  { id: 1, name: "دسته ی کاری دوم" },
  { id: 1, name: "دسته ی کاری سوم" },
  { id: 1, name: "دسته ی کاری چهارم" },
];

const PersonnelEdit = ({ personData, switchHandler }) => {
  return (
    <div className="m-auto h-[28rem] w-[40rem] rounded-md bg-white p-4">
      <p>ویرایش پرسنل</p>

      <form className="flex flex-col justify-center">
        <div className="my-8 grid gap-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="first_name"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              نام
            </label>
            <input
              type="text"
              id="first_name"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-green-500 focus:ring-green-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-green-500 dark:focus:ring-green-500"
              defaultValue={personData.name}
              required
            />
          </div>
          <div>
            <label
              htmlFor="last_name"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              نام خانوادگی
            </label>
            <input
              type="text"
              id="last_name"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-green-500 focus:ring-green-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-green-500 dark:focus:ring-green-500"
              defaultValue={personData.lastName}
              required
            />
          </div>
          <div>
            <label
              htmlFor="company"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              شماره پرسنلی
            </label>
            <input
              type="text"
              id="company"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-green-500 focus:ring-green-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-green-500 dark:focus:ring-green-500"
              defaultValue={personData.pNumber}
              required
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              کد ملی
            </label>
            <input
              type="tel"
              id="phone"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-green-500 focus:ring-green-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-green-500 dark:focus:ring-green-500"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              defaultValue={personData.nNumber}
              required
            />
          </div>
          <div>
            <label
              htmlFor="website"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              دسته ی کاری
            </label>
            <ComboBoxComponent
              wGroup={personData.workGroup}
              comboData={groups}
            />
          </div>
          <div>
            {personData.retired ? (
              <div className="mt-[35px] flex gap-2">
                <SwitchToggle status={!personData.retired} />
                <span>بازنشسته</span>
              </div>
            ) : (
              <div className="mt-[35px] flex gap-2">
                <span onClick={() => switchHandler(personData.nNumber)}>
                  <SwitchToggle status={!personData.retired} />
                </span>
                <span>مشغول به کار</span>
              </div>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-green-400 px-5 py-2.5 text-center text-lg font-bold text-white hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-green-500 dark:hover:bg-green-500 dark:focus:ring-green-500 sm:w-auto"
        >
          ویرایش
        </button>
      </form>
    </div>
  );
};

export default PersonnelEdit;
