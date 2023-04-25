const PersonnelAdd = () => {
  return (
    <form className="h-fit w-[40rem] rounded-md bg-white p-4">
      <div className="grid grid-cols-2 gap-8">
        <div className="flex flex-col">
          <label htmlFor="firstName">نام</label>
          <input id="firstName" type="text" className="rounded" required />
        </div>

        <div className="flex flex-col">
          <label htmlFor="lastName">نام خانوادگی</label>
          <input id="lastName" type="text" className="rounded" required />
        </div>

        <div className="flex flex-col">
          <label htmlFor="nationalNumber">کد ملی</label>
          <input id="nationalNumber" type="text" className="rounded" required />
        </div>

        <div className="flex flex-col">
          <label htmlFor="personnelNumber">شماره پرسنلی</label>
          <input
            id="personnelNumber"
            type="text"
            className="rounded"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="workGroup">گروه کاری</label>
          <select
            id="workGroup"
            name="wGroup"
            className="float-left appearance-none rounded"
          >
            <option value="1">دسته ی کاری اول</option>
            <option value="2">دسته ی کاری دوم</option>
            <option value="3">دسته ی کاری سوم</option>
            <option value="4">دسته ی کاری چهارم</option>
          </select>
        </div>

        <div className="item-center flex gap-2 mt-[38px]">
          <input type="checkbox" id="retired" name="vehicle1" />
          <label htmlFor="retired">مشغول به کار</label>
        </div>
      </div>

      <button
        type="submit"
        className="item-center mt-8 flex w-full justify-center rounded bg-green-300 p-2 shadow hover:bg-green-400"
      >
        اضافه کردن پرسنل
      </button>
    </form>
  );
};

export default PersonnelAdd;
