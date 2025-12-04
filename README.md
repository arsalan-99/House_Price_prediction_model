<div align="center">

## 📦 **Tools, Libraries & Techniques Used**

</div>

### **🔧 Libraries**
- **Pandas** – Data cleaning & manipulation  
- **NumPy** – Numerical operations  
- **Matplotlib** – Data visualization  
- **Scikit-Learn**  
  - Train–test split  
  - Linear Regression model  

---

### **🗂️ Dataset & Features**
- Bengaluru house price dataset (`Bengaluru_House_Data.csv`)
- Features used after cleaning:
  - `total_sqft`
  - `bath`
  - `bhk`
  - One-hot encoded location columns  

---

### **🧹 Data Cleaning & Preprocessing**
- Dropped irrelevant columns:  
  `area_type`, `availability`, `society`, `balcony`
- Removed missing values  
- Converted mixed-format `total_sqft` values (e.g., `"2100 - 2850"`) to numeric  
- Extracted **BHK** count from `size`  
- Removed extreme outliers:
  - Unrealistic BHK counts  
  - Total sqft per BHK < 300  
  - Extreme price-per-sqft values  
  - BHK-level outliers within each location  
- Standardized & cleaned location values  
- Grouped rare locations as `"others"`  
- One-hot encoded 242 location categories  
- Converted all feature names to lowercase  

---

### **🤖 Machine Learning Model**
- **Algorithm:** Linear Regression  
- **Train/Test Split:** 80% / 20%  
- **Model Accuracy:** ~ **84.5% (R² Score)**  

---

### **📁 Model Export**
- Trained model saved as: **`home_prices_model.pickle`**  
- Column metadata saved as: **`columns.json`**  

---

### **🧮 Prediction Function**
Accepts:  
`location`, `square_feet`, `bathrooms`, `BHK`  
Returns:  
Predicted price of the house  

---

