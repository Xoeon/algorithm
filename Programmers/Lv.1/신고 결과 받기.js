function solution(id_list, reports, k) {
  const report_obj = {};
  const report_count = {};

  for (let id of id_list) {
    report_obj[id] = [];
    report_count[id] = 0;
  }

  for (let report of reports) {
    const [reporter, reported] = report.split(' ');
    report_obj[reporter].push(reported);
  }

  for (let reported_list of Object.values(report_obj)) {
    const set = new Set(reported_list);
    for (let name of set) {
      report_count[name]++;
    }
  }

  const reported = [];
  for (report of Object.entries(report_count)) {
    const [name, count] = report;
    if (count >= k) reported.push(name);
  }

  const ans = [];
  for (let report_list of Object.values(report_obj)) {
    let count = 0;
    for (let reported_name of reported) {
      if (report_list.find((name) => name === reported_name)) {
        count++;
      }
    }
    ans.push(count);
  }

  return ans;
}
