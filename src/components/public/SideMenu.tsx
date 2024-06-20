export default function SideMenu() {
  return (
    <div>
      <div className="text-2xl pb-6">My account</div>
      <div className="flex flex-col text-sm text-gray-400 leading-6">
        <a href="http://localhost:3000/profile">MY DETAILS</a>
        <a href="http://localhost:3000/profile/historyorder">MY ORDERS</a>
        <a href="http://localhost:3000/profile">MY DETAILS</a>
        <a href="http://localhost:3000/profile">MY DETAILS</a>

        <a href="http://localhost:3000/profile" className="text-xs underline pt-4">sign out</a>

      </div>
    </div>
  )
}