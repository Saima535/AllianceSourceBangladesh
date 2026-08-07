export default function InventoryComponent() {
  return (
    <section className="flex flex-col items-center gap-20 px-16 py-28 w-full bg-white">
      <div className="text-center">
        <h1 className="text-6xl font-medium tracking-tight">
          Our Machinery Inventory
        </h1>
      </div>

      <div className="w-full max-w-7xl">
        <h2 className="text-4xl font-medium text-center mb-10">
          Cutting Machinery
        </h2>

        <div className="overflow-hidden rounded-2xl border border-gray-300">
          <table className="w-full border-collapse">
            <thead className="bg-gray-100">
              <tr className="text-left text-gray-700">
                <th className="px-6 py-5 font-semibold w-24">SL No.</th>
                <th className="px-6 py-5 font-semibold">Machine Name</th>
                <th className="px-6 py-5 font-semibold">Brand</th>
                <th className="px-6 py-5 font-semibold text-center">
                  Quantity
                </th>
              </tr>
            </thead>

            <tbody className="text-gray-800">
              {[
                ["01", 'Cutting Machine 10"', "KM", "03"],
                ["02", 'Cutting Machine 8"', "KM", "03"],
                ["03", 'Cutting Machine 8"', "Open", "01"],
                ["04", "Band Knife Machine", "Open", "01"],
                ["05", "End Cutting Machine", "Eastman", "02"],
                ["06", "Fabric Inspection Machine", "Open", "01"],
                ["07", "Fusing Machine (Medium) HP-650", "Open", "02"],
                ["08", "Drill Machine", "Open", "02"],
                ["09", "Numbering Machine", "Open", "05"],
              ].map(([sl, machine, brand, qty]) => (
                <tr key={sl} className="border-t border-gray-300">
                  <td className="px-6 py-5">{sl}</td>
                  <td className="px-6 py-5">{machine}</td>
                  <td className="px-6 py-5">{brand}</td>
                  <td className="px-6 py-5 text-center">{qty}</td>
                </tr>
              ))}

              <tr className="border-t border-gray-300 font-semibold">
                <td colSpan={2}></td>
                <td className="px-6 py-8 text-right">
                  Total Cutting Machinery
                </td>
                <td className="px-6 py-8 text-center">20</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
