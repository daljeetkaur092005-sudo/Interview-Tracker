
import React from 'react'
import { useDashBoard } from '../../Hooks/useDashBoard'

const QuestionPage = () => {

  const { filterData } = useDashBoard()

  return (
    <div className="min-h-screen bg-[#090B0F] text-white p-8">

      {/* Header */}
      <div className="mb-8">
        <p className="text-[#C9B458] text-sm font-medium tracking-widest">
          YOUR PREPARATION
        </p>

        <h1 className="text-3xl font-semibold mt-2">
          All Questions
        </h1>

        <p className="text-[#777E88] mt-2">
          Manage and review your interview questions.
        </p>
      </div>

      {/* Total Questions */}
      <div className="bg-[#101318] border border-[#252A31] rounded-2xl p-5 mb-8">
        <p className="text-[#858C96] text-sm">
          Total Questions
        </p>

        <h2 className="text-3xl font-semibold text-[#C9B458] mt-2">
          {filterData.length}
        </h2>
      </div>

      {/* Question Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

        {filterData.map((val, index) => {
          return (
            <div
              key={index}
              className="bg-[#101318] border border-[#252A31] rounded-2xl p-6
              hover:border-[#C9B458] transition duration-300"
            >

              <div className="flex items-start gap-4 mb-5">

                <div className="w-10 h-10 shrink-0 rounded-xl bg-[#292515]
                text-[#C9B458] flex items-center justify-center font-semibold">
                  {index + 1}
                </div>

                <div>
                  <p className="text-xs text-[#777E88] mb-2">
                    QUESTION {index + 1}
                  </p>

                  <h2 className="text-lg font-medium text-[#F1F1EC]">
                    {val.addQuestion}
                  </h2>
                </div>

              </div>

              <div className="flex flex-wrap gap-3">

                <span className="px-3 py-1.5 rounded-lg bg-[#191C21]
                border border-[#2A2F36] text-sm text-[#C9B458]">
                  {val.category}
                </span>

                <span className="px-3 py-1.5 rounded-lg bg-[#191C21]
                border border-[#2A2F36] text-sm text-[#D7D9DD]">
                  {val.difficulty}
                </span>

                <span className="px-3 py-1.5 rounded-lg bg-[#191C21]
                border border-[#2A2F36] text-sm text-[#9BC58A]">
                  {val.status}
                </span>

              </div>

            </div>
          )
        })}

      </div>

      {/* Empty State */}
      {filterData.length === 0 && (
        <div className="text-center py-16 bg-[#101318] border border-[#252A31] rounded-2xl">
          <h2 className="text-xl font-semibold text-[#C9B458]">
            No Questions Found
          </h2>

          <p className="text-[#858C96] mt-2">
            Add a question to see it here.
          </p>
        </div>
      )}

    </div>
  )
}

export default QuestionPage
