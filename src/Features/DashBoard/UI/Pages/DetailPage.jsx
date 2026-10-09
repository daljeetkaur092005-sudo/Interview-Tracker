import React, { useContext } from "react";
import { useDashBoard } from "../../Hooks/useDashBoard";
import { MyStore } from "../../State/useContext";




const DetailPage = () => {
const {register,handleSubmit,detailSubmit}=useDashBoard()
      const {setFilter}=useContext(MyStore)
    

  return (
    <div className="min-h-screen bg-[#090B0F] text-white px-6 py-10">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <div className="mb-8">
          <p className="text-[#C9B458] text-sm font-medium tracking-wider mb-2">
            INTERVIEW TRACKER
          </p>

          <h1 className="text-3xl font-semibold">
            Add Interview Question
          </h1>

          <p className="text-[#858B95] mt-2">
            Add a question and keep track of your interview preparation.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-[#101318] border border-[#252A31] rounded-2xl p-7 md:p-9">

          <form
            onSubmit={handleSubmit(detailSubmit)}
            className="space-y-6"
          >

            {/* Question */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Interview Question
              </label>

              <input
                {...register("addQuestion", {
                  required: "enter your question",
                })}

                type="text"
                placeholder="Enter your interview question..."
                className="
                  w-full
                  h-12
                  px-4
                  rounded-xl
                  bg-[#0B0E12]
                  border border-[#292F37]
                  text-white
                  placeholder:text-[#606772]
                  outline-none
                  transition
                  focus:border-[#C9B458]
                  focus:ring-1
                  focus:ring-[#C9B458]
                "
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Category
              </label>

              <select
                {...register("category", {
                  required: "category is required",
                })}
        
                className="
                  w-full
                  h-12
                  px-4
                  rounded-xl
                  bg-[#0B0E12]
                  border border-[#292F37]
                  text-[#D7D9DD]
                  outline-none
                  cursor-pointer
                  focus:border-[#C9B458]
                  focus:ring-1
                  focus:ring-[#C9B458]
                "
              >
                <option value="">All category</option>
                <option value="DSA">DSA</option>
                <option value="Git">Git</option>
                <option value="Technical">Technical</option>
              </select>
            </div>

            {/* Difficulty */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Difficulty
              </label>

              <select
                {...register("difficulty", {
                  required: "difficulty is required",
                })}
                className="
                  w-full
                  h-12
                  px-4
                  rounded-xl
                  bg-[#0B0E12]
                  border border-[#292F37]
                  text-[#D7D9DD]
                  outline-none
                  cursor-pointer
                  focus:border-[#C9B458]
                  focus:ring-1
                  focus:ring-[#C9B458]
                "
              >
                <option value="">Select difficulty</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>

            {/* Status */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Status
              </label>

              <select
                {...register("status", {
                  required: "status is required",
                })}
                className="
                  w-full
                  h-12
                  px-4
                  rounded-xl
                  bg-[#0B0E12]
                  border border-[#292F37]
                  text-[#D7D9DD]
                  outline-none
                  cursor-pointer
                  focus:border-[#C9B458]
                  focus:ring-1
                  focus:ring-[#C9B458]
                "
              >
                <option value="">Select status</option>
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>

            {/* Button */}
            <div className="flex justify-end pt-3">
              <button
       
                type="submit"
                className="
                  px-7
                  py-3
                  rounded-xl
                  bg-[#C9B458]
                  text-[#11120E]
                  font-semibold
                  hover:bg-[#D8C56B]
                  transition
                  duration-200
                  cursor-pointer
                "
           
              >
                Add Question →
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;