console.log("connect");
const jobs = [
  {
    id: 1,
    companyName: "Google",
    position: "Frontend Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$6000/month",
    description: "Build modern user interfaces using React.",
    status: "all",
  },
  {
    id: 2,
    companyName: "Microsoft",
    position: "Backend Developer",
    location: "USA",
    type: "Full-time",
    salary: "$7000/month",
    description: "Develop scalable backend APIs.",
    status: "all",
  },
  {
    id: 3,
    companyName: "Amazon",
    position: "DevOps Engineer",
    location: "Canada",
    type: "Contract",
    salary: "$5500/month",
    description: "Manage CI/CD and cloud deployments.",
    status: "all",
  },
  {
    id: 4,
    companyName: "Meta",
    position: "UI Designer",
    location: "Remote",
    type: "Part-time",
    salary: "$4000/month",
    description: "Design interactive web experiences.",
    status: "all",
  },
  {
    id: 5,
    companyName: "Tesla",
    position: "Software Engineer",
    location: "USA",
    type: "Full-time",
    salary: "$7500/month",
    description: "Work on automation software systems.",
    status: "all",
  },
  {
    id: 6,
    companyName: "Netflix",
    position: "Cloud Engineer",
    location: "UK",
    type: "Full-time",
    salary: "$6500/month",
    description: "Maintain distributed cloud infrastructure.",
    status: "all",
  },
  {
    id: 7,
    companyName: "Airbnb",
    position: "Mobile Developer",
    location: "Germany",
    type: "Full-time",
    salary: "$5800/month",
    description: "Develop cross-platform mobile apps.",
    status: "all",
  },
  {
    id: 8,
    companyName: "Spotify",
    position: "Data Analyst",
    location: "Sweden",
    type: "Contract",
    salary: "$5000/month",
    description: "Analyze user listening behavior.",
    status: "all",
  },
];
let currentTab = "all";
document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", function () {
    document.querySelectorAll(".tab").forEach((t) => {
      t.classList.remove("bg-blue-600", "text-white");
      t.classList.add("bg-gray-200");
    });

    this.classList.remove("bg-gray-200");
    this.classList.add("bg-blue-600", "text-white");

    currentTab = this.dataset.tab;
    renderJobs();
    updateDashboard();
  });
});
const jobsContainer = document.getElementById("jobsContainer");
function updateDashboard() {
  const total = jobs.length;
  const interview = jobs.filter((j) => j.status === "interview").length;
  const rejected = jobs.filter((j) => j.status === "rejected").length;

  document.getElementById("totalCount").innerText = total;
  document.getElementById("interviewCount").innerText = interview;
  document.getElementById("rejectedCount").innerText = rejected;

  const tabJobs =
    currentTab === "all" ? jobs : jobs.filter((j) => j.status === currentTab);
  //   document.getElementById("tabCount").innerText = `${tabJobs.length}   Jobs`;
  if (currentTab === "all") {
    tabCount.innerText = `${jobs.length} Jobs`;
  } else {
    tabCount.innerText = `${tabJobs.length} of ${jobs.length} Jobs`;
  }
}
// make cards

function renderJobs() {
  jobsContainer.innerHTML = "";

  const filtered =
    currentTab === "all" ? jobs : jobs.filter((j) => j.status === currentTab);

  if (filtered.length === 0) {
    jobsContainer.innerHTML = `
      <div class="col-span-full text-center py-16 text-gray-500">
        <div class="text-5xl mb-4">📂</div>
        <h3 class="text-xl font-semibold">No Jobs Available</h3>
        <p class="text-sm">There are no jobs in this section right now.</p>
      </div>
    `;
    return;
  }

  filtered.forEach((job) => {
    const div = document.createElement("div");
    div.className = "bg-white p-6 rounded-xl shadow hover:shadow-lg transition";

    div.innerHTML = `
    <div class="flex justify-between items-start">

    <div>
     <h3 class="text-xl font-bold mb-1">${job.position}</h3>
      <p class="text-gray-600 font-semibold">${job.companyName}</p>
      <p class="text-sm text-gray-500">${job.location} • ${job.type}</p>
      <p class="text-blue-600 font-semibold mt-2">${job.salary}</p>
      <p class="text-gray-600 text-sm mt-2">${job.description}</p>
   <span class="px-3 py-1 text-xs font-semibold rounded-full
      ${
        job.status === "interview"
          ? "bg-green-100 text-green-700"
          : job.status === "rejected"
            ? "bg-red-100 text-red-700"
            : "bg-gray-200 text-gray-700"
      }">
      ${job.status === "all" ? "Pending" : job.status.toUpperCase()}
    </span>
      <div class="flex gap-2 mt-4 flex-wrap">
        <button onclick="changeStatus(${job.id}, 'interview')" 
          class="px-3 py-1 rounded-lg text-green-700 ${job.status === "interview" ? "border-2 border-green-700 " : "border-2 border-green-700 "}">
          Interview
        </button>

        <button onclick="changeStatus(${job.id}, 'rejected')" 
          class="px-3 py-1 rounded-lg text-red-500 ${job.status === "rejected" ? " border-2 border-red-700" : " border-2 border-red-700"}">
          Rejected
        </button>
      </div></div>
        <button onclick="deleteJob(${job.id})" 
          class="px-3 py-1 rounded-lg bg-gray-600 text-white">
          Delete
        </button>
    </div>
     
    `;

    jobsContainer.appendChild(div);
  });
}
function changeStatus(id, status) {
  const job = jobs.find((j) => j.id === id);
  job.status = job.status === status ? "all" : status;
  renderJobs();
  updateDashboard();
}
// delete
function deleteJob(id) {
  const index = jobs.findIndex((j) => j.id === id);
  jobs.splice(index, 1);
  renderJobs();
  updateDashboard();
}

updateDashboard();
renderJobs();
