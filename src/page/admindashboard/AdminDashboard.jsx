import React, { useEffect, useState } from 'react';
import { fetchProducts, addProduct, updateProduct, deleteProduct } from '../../services/productservice';
import { logout } from '../../services/authservice';

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: '', price: '', quantity: '', category: '', image: '', description: '' });
  const [editId, setEditId] = useState(null);

  const loadProducts = async () => {
    try {
      const res = await fetchProducts();
      setProducts(res.data);
    } catch (err) {
      alert("Error loading products");
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        await updateProduct(editId, form);
        alert("✅ Product updated");
      } else {
        await addProduct(form);
        alert("✅ Product added");
      }
      setForm({ name: '', price: '', quantity: '', category: '', image: '', description: '' });
      setEditId(null);
      loadProducts();
    } catch {
      alert("❌ Failed to save product");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      await deleteProduct(id);
      loadProducts();
    }
  };

  const handleEdit = (product) => {
    setForm(product);
    setEditId(product._id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2>👑 Admin Panel - Product Management</h2>
        <button style={styles.logoutButton} onClick={() => { logout(); window.location.href = '/' }}>Logout</button>
      </div>

      <div style={styles.formSection}>
        <h3>{editId ? "✏️ Edit Product" : "➕ Add Product"}</h3>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input style={styles.input} name="name" placeholder="Product Name" value={form.name} onChange={handleChange} required />
          <input style={styles.input} name="price" placeholder="Price" value={form.price} onChange={handleChange} required />
          <input style={styles.input} name="quantity" placeholder="Quantity" value={form.quantity} onChange={handleChange} required />
          <input style={styles.input} name="category" placeholder="Category" value={form.category} onChange={handleChange} />
          <input style={styles.input} name="image" placeholder="Image URL" value={form.image} onChange={handleChange} />
          <textarea style={styles.textarea} name="description" placeholder="Description" value={form.description} onChange={handleChange} />
          <button type="submit" style={styles.submitButton}>{editId ? "Update" : "Add"}</button>
        </form>
      </div>

      <h3 style={{ marginTop: 40 }}>📦 Product List</h3>
      <div style={styles.grid}>
        {products.map((p) => (
          <div key={p._id} style={styles.card}>
            {p.image || p.images ? (
              <img src={p.image || p.images} alt={p.name} style={styles.image} />
            ) : (
              <div style={styles.noImage}>No Image</div>
            )}
            <h4>{p.name}</h4>
            <p><strong>₹{p.price}</strong></p>
            <p><strong>Qty:</strong> {p.quantity}</p>
            <p style={{ fontSize: '13px' }}>{p.description}</p>
            <div style={styles.cardButtons}>
              <button onClick={() => handleEdit(p)} style={{ ...styles.button, backgroundColor: "#0d6efd" }}>Edit</button>
              <button onClick={() => handleDelete(p._id)} style={{ ...styles.button, backgroundColor: "#dc3545" }}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: 30,
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    maxWidth: "1200px",
    margin: "auto"
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logoutButton: {
    padding: "8px 16px",
    backgroundColor: "#6c757d",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  },
  formSection: {
    marginTop: 30,
    backgroundColor: "#f9f9f9",
    padding: 20,
    borderRadius: "10px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
  },
  form: {
    display: 'grid',
    gap: '10px'
  },
  input: {
    padding: '8px',
    borderRadius: '5px',
    border: '1px solid #ccc'
  },
  textarea: {
    padding: '8px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    resize: 'vertical',
    minHeight: '60px'
  },
  submitButton: {
    padding: "10px",
    backgroundColor: "#198754",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
    marginTop: 20
  },
  card: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "10px",
    backgroundColor: "#fff",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "6px"
  },
  noImage: {
    width: "100%",
    height: "150px",
    backgroundColor: "#eee",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "6px",
    color: "#999"
  },
  cardButtons: {
    display: "flex",
    gap: "10px",
    marginTop: "10px"
  },
  button: {
    flex: 1,
    padding: "6px 10px",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  }
};

export default AdminDashboard;
