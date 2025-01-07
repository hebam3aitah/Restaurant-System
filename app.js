function Customer(name, password, dob, gender, orderType, size, phone) {
  this.name = name;
  this.password = password;
  this.dob = dob;
  this.gender = gender;
  this.orderType = orderType;
  this.size = size;
  this.phone = phone;
}

function renderCard(customer) {
  const container = document.getElementById("cardsContainer");
  const card = document.createElement("div");
  card.className = "card m-2 p-2";
  card.style.width = "18rem";
  card.style.border = "2px solid #ccc"; // تحديد حد للكارد
  card.style.borderRadius = "10px"; // إضافة زوايا دائرية
  card.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)"; // إضافة ظل خفيف للكارد
  card.style.backgroundColor = "#f8f9fa"; // تغيير لون الخلفية للكارد
  card.style.transition = "transform 0.3s"; // إضافة تأثير عند التفاعل مع الكارد

  card.innerHTML = `
          <div class="card-body">
              <h5 class="card-title">Name: ${customer.name}</h5>
              <img src="gettyimages-1300845620-612x612.jpg" style="height: 50px; width: 50px; border-radius: 5px;">
              <p class="card-text">Date of Birth: ${customer.dob}</p>
              <p class="card-text">Gender: ${customer.gender}</p>
              <p class="card-text">Order Type: ${customer.orderType.join(
                ", "
              )}</p>
              <p class="card-text">Size: ${customer.size}</p>
              <p class="card-text">Phone: ${customer.phone}</p>
          </div>`;

  // إضافة تأثير عند مرور الماوس
  card.addEventListener("mouseover", () => {
    card.style.transform = "scale(1.05)"; // تكبير الكارد قليلاً عند مرور الماوس
  });

  // إعادة الكارد لحجمه الطبيعي عند مغادرة الماوس
  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
  });

  container.appendChild(card);
}

document.getElementById("click").addEventListener("click", () => {
  const name = document.getElementById("Name").value;
  const password = document.getElementById("Password").value;
  const dob = document.getElementById("DateOfBirth").value;
  const gender = document.getElementById("gender").value;
  const phone = document.getElementById("PhoneNumber").value;

  const orderType = Array.from(
    document.querySelectorAll('input[name="order"]:checked')
  ).map((input) => input.value);
  const size = document.querySelector('input[name="size"]:checked')?.value;

  const customer = new Customer(
    name,
    password,
    dob,
    gender,
    orderType,
    size,
    phone
  );

  localStorage.setItem("customer", JSON.stringify(customer));

  const savedCustomer = JSON.parse(localStorage.getItem("customer"));

  renderCard(savedCustomer);
});
