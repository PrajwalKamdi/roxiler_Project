import db from '../config/db.js'
export const getStores = async (req, res) => {
  const query = 'select * from stores';
  db.query(query, (err, result) => {
    if (err) {
      console.error('Error fetching stores:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    res.status(200).json(result);
  });
}

export const getStoreById = async (req, res) => {
  const storeId = req.params.id;
  const query = 'SELECT * FROM stores WHERE store_id = ?';
  db.query(query, [storeId], (err, result) => {
    if (err) {
      console.error('Error fetching store:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    if (result.length === 0) {
      return res.status(404).json({ error: 'Store not found' });
    }
    res.status(200).json(result[0]);
  });
}
export const createStore = async (req, res) => {
  const { store_name, email, address } = req.body;
  const query = 'INSERT INTO stores (store_name, email, address) VALUES (?, ?, ?)';
  db.query(query, [store_name, email, address], (err, result) => {
    if (err) {
      console.error('Error creating store:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    res.status(201).json({
      message: 'Store added successfully'
    });
  });
}

export const saveStoreRating = async (req, res) => {
  const { store_id, user_name, rating, review } = req.body;
  const query = 'INSERT INTO store_rating (store_id, user_name, rating, review) VALUES (?, ?,?,?)';
  db.query(query, [store_id, user_name, rating, review], (err, result) => {
    if (err) {
      console.error('Error saving store rating:', err);
      return res.status(500).json({ 
        error: 'Internal server error' ,
        message: err.message
      });
    }
    res.status(201).json({
      message: 'Store rating saved successfully'
    });
  });
}

export const getStoreRating = async (req, res) => {
  const storeId = req.params.id;
  const query = 'SELECT * FROM store_ratings WHERE store_id = ?';
  db.query(query, [storeId], (err, result) => {
    if (err) {
      console.error('Error fetching store ratings:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    if (result.length === 0) {
      return res.status(404).json({ error: 'Store not found' });
    }
    res.status(200).json(result);
  });
}