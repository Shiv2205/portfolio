

function Card({ props }) {
  return (
    <div className="justify-center">
        <div className="block p-6 rounded-b-lg rounded-t-lg py-16 shadow-lg max-w bg-gradient-to-br from-indigo-600 to-blue-400">
            {props}
        </div>
    </div>
  )
}

export default Card