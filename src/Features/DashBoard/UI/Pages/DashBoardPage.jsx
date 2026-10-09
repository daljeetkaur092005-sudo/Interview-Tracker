import React, { useContext } from "react";
import { MyStore } from "../../State/useContext";
import { useDashBoard } from "../../Hooks/useDashBoard";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Search,
  BookOpen,
  Code2,
  GitBranch,
  Layers3,
  SlidersHorizontal,
} from "lucide-react";

const DashBoardPage = () => {
  const {
    formdata,
    setCategory,
    setDifficult,
    setStatus,
    search,
    setSearch,
    completed,
    pending

  } = useContext(MyStore);

  const { filterData } = useDashBoard();

  const chartData = [
    {
      category: "DSA",
      count: formdata.filter((val) => val.category === "DSA").length
    },
    {
      category: "Git",
      count: formdata.filter((val) => val.category === "Git").length
    },
    {
      category: "Technical",
      count: formdata.filter((val) => val.category === "Technical").length
    },
  ];

 

  

  return (
    <div className="min-h-screen bg-[#090B0F] px-4 py-6 text-white sm:px-6 lg:px-8 lg:py-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] text-[#C9B458]">
              YOUR WORKSPACE
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Interview Tracker
            </h1>
            <p className="mt-2 text-sm text-[#858C96] sm:text-base">
              Track your preparation and keep your interview goals on course.
            </p>
          </div>

          <div className="flex w-fit items-center gap-3 rounded-2xl border border-[#292F37] bg-[#101318] px-4 py-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#C9B458]/10 text-[#C9B458]">
              <BookOpen size={20} />
            </div>
            <div>
              <p className="text-xs text-[#858C96]">Questions tracked</p>
              <p className="text-lg font-semibold">{formdata.length}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          <div className="rounded-2xl border border-[#C9B458]/25 bg-gradient-to-br from-[#17180F] to-[#101318] p-5 sm:p-6">
            <div className="flex items-center justify-between">
              <p className="text-sm text-[#A5A8A3]">Total Questions</p>
              <div className="rounded-xl bg-[#C9B458]/10 p-3 text-[#C9B458]">
                <Layers3 size={20} />
              </div>
            </div>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight">
              {formdata.length}
            </h2>
            <p className="mt-2 text-xs text-[#858C96]">
              All questions in your tracker
            </p>
          </div>

          <div className="rounded-2xl border border-[#252A31] bg-[#101318] p-5 transition hover:border-[#C9B458]/40 sm:p-6">
            <div className="flex items-center justify-between">
              <p className="text-sm text-[#A5A8A3]">Completed</p>
              <div className="rounded-xl bg-[#C9B458]/10 p-3 text-[#C9B458]">
                <Code2 size={20} />
              </div>
            </div>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight">
              {completed}
            </h2>
            <p className="mt-2 text-xs text-[#858C96]">
              Questions marked completed
            </p>
          </div>

          <div className="rounded-2xl border border-[#252A31] bg-[#101318] p-5 transition hover:border-[#C9B458]/40 sm:col-span-2 sm:p-6 xl:col-span-1">
            <div className="flex items-center justify-between">
              <p className="text-sm text-[#A5A8A3]">Pending</p>
              <div className="rounded-xl bg-[#C9B458]/10 p-3 text-[#C9B458]">
                <GitBranch size={20} />
              </div>
            </div>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight">
              {pending}
            </h2>
            <p className="mt-2 text-xs text-[#858C96]">
              Questions waiting for review
            </p>
          </div>
        </div>

        <section className="rounded-2xl border border-[#252A31] bg-[#101318] p-5 sm:p-6">
          <div className="mb-5 flex items-center gap-3">
            <div className="rounded-xl bg-[#C9B458]/10 p-2.5 text-[#C9B458]">
              <SlidersHorizontal size={19} />
            </div>
            <div>
              <h2 className="font-semibold">Find your questions</h2>
              <p className="mt-1 text-xs text-[#858C96]">
                Search and filter your preparation list
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <div className="relative sm:col-span-2 xl:col-span-1">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#777E88]"
              />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="search"
                placeholder="Search questions..."
                className="h-12 w-full rounded-xl border border-[#292F37] bg-[#0B0E12] px-4 pl-11 text-sm text-[#E7E8E3] outline-none transition placeholder:text-[#666D77] focus:border-[#C9B458] focus:ring-1 focus:ring-[#C9B458]/30"
              />
            </div>

            <select
              defaultValue=""
              onChange={(e) => setCategory(e.target.value)}
              className="h-12 w-full cursor-pointer rounded-xl border border-[#292F37] bg-[#0B0E12] px-4 text-sm text-[#D7D9DD] outline-none transition focus:border-[#C9B458] focus:ring-1 focus:ring-[#C9B458]/30"
            >
              <option value="">All categories</option>
              <option value="DSA">DSA</option>
              <option value="Git">Git</option>
              <option value="Technical">Technical</option>
            </select>

            <select
              defaultValue=""
              onChange={(e) => setDifficult(e.target.value)}
              className="h-12 w-full cursor-pointer rounded-xl border border-[#292F37] bg-[#0B0E12] px-4 text-sm text-[#D7D9DD] outline-none transition focus:border-[#C9B458] focus:ring-1 focus:ring-[#C9B458]/30"
            >
              <option value="">All difficulties</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>

            <select
              defaultValue=""
              onChange={(e) => setStatus(e.target.value)}
              className="h-12 w-full cursor-pointer rounded-xl border border-[#292F37] bg-[#0B0E12] px-4 text-sm text-[#D7D9DD] outline-none transition focus:border-[#C9B458] focus:ring-1 focus:ring-[#C9B458]/30"
            >
              <option value="">All statuses</option>
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        </section>

        <section>
          <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="text-xl font-semibold">Your Questions</h2>
              <p className="mt-1 text-sm text-[#858C96]">
                Review and revisit your interview preparation
              </p>
            </div>
            <span className="rounded-lg border border-[#292F37] bg-[#101318] px-3 py-1.5 text-sm text-[#C9B458]">
              {filterData.length} results
            </span>
          </div>

          {filterData.length > 0 ? (
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              {filterData.map((val, index) => (
                <article
                  key={val.id ?? `${val.addQuestion}-${index}`}
                  className="group rounded-2xl border border-[#252A31] bg-[#101318] p-5 transition duration-200 hover:-translate-y-0.5 hover:border-[#C9B458]/50 sm:p-6"
                >
                  <div className="mb-5 flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#C9B458]/20 bg-[#C9B458]/10 text-sm font-semibold text-[#C9B458]">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="mb-2 text-[10px] font-semibold tracking-[0.2em] text-[#777E88]">
                        INTERVIEW QUESTION
                      </p>
                      <h3 className="break-words text-base font-medium leading-7 text-[#F1F1EC]">
                        {val.addQuestion}
                      </h3>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 border-t border-[#252A31] pt-4">
                    <span className="rounded-lg border border-[#C9B458]/20 bg-[#C9B458]/5 px-3 py-1.5 text-xs text-[#D8C878]">
                      {val.category}
                    </span>
                    <span className="rounded-lg border border-[#292F37] bg-[#191C21] px-3 py-1.5 text-xs text-[#B7BBC1]">
                      {val.difficulty}
                    </span>
                    <span className="rounded-lg border border-[#292F37] bg-[#191C21] px-3 py-1.5 text-xs text-[#B7BBC1]">
                      {val.status}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-[#333943] bg-[#101318]/70 px-5 py-14 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C9B458]/10 text-[#C9B458]">
                <Search size={22} />
              </div>
              <h3 className="mt-4 font-semibold">No questions found</h3>
              <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-[#858C96]">
                Try a different search term or change your filters to see more questions.
              </p>
            </div>
          )}
        </section>

        <section className="rounded-2xl border border-[#252A31] bg-[#101318] p-5 sm:p-6">
          <div className="mb-6">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#C9B458]">
              YOUR PROGRESS
            </p>
            <h2 className="mt-2 text-xl font-semibold">
              Questions by Category
            </h2>
            <p className="mt-1 text-sm text-[#858C96]">
              Understand where your preparation is focused.
            </p>
          </div>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={chartData}
              margin={{ top: 10, right: 12, left: -15, bottom: 5 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#252A31"
                vertical={false}
              />
              <XAxis
                dataKey="category"
                tick={{ fill: "#9CA2AB", fontSize: 12 }}
                axisLine={{ stroke: "#252A31" }}
                tickLine={false}
              />
              <YAxis
                allowDecimals={false}
                tick={{ fill: "#9CA2AB", fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                cursor={{ fill: "#C9B458", fillOpacity: 0.06 }}
                contentStyle={{
                  backgroundColor: "#161A20",
                  border: "1px solid #393725",
                  borderRadius: "12px",
                  color: "#fff",
                  fontSize: "12px",
                }}
              />
              <Bar
                dataKey="count"
                name="Questions"
                fill="#C9B458"
                radius={[7, 7, 0, 0]}
                maxBarSize={55}
              />
            </BarChart>
          </ResponsiveContainer>
        </section>
      </div>
    </div>
  );
};

export default DashBoardPage;