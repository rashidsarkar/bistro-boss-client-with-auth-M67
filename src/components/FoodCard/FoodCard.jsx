import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

const FoodCard = ({ item }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();
  //   console.log(user);
  const { name, image, price, recipe } = item;
  const handleAddtoCart = (food) => {
    if (user && user.email) {
      //sent cart item to the data base
    } else {
      // set sweetalart to user is not found
      Swal.fire({
        title: "you are not Login",
        text: "please login to add to cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login",
      }).then((result) => {
        if (result.isConfirmed) {
          //send the user to the login page using navigate
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="shadow-xl card w-96 bg-base-100">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="absolute right-0 px-4 mt-4 mr-4 text-white bg-slate-900">
        ${price}
      </p>
      <div className="flex flex-col items-center card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="justify-end card-actions">
          <button
            onClick={() => handleAddtoCart(item)}
            className="mt-4 border-0 border-b-4 border-orange-400 btn btn-outline bg-slate-100"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
