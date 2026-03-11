import { Pool } from 'pg'
import dotenv from 'dotenv'

dotenv.config()

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
})

async function seedDatabase() {
  try {
    console.log('Seeding database...')
    
    // Insert sample users
    await pool.query(\
      INSERT INTO users (email, name) VALUES 
      ('admin@kayzen.com', 'Admin User'),
      ('user@kayzen.com', 'Test User')
      ON CONFLICT (email) DO NOTHING
    \)

    console.log('✅ Database seeding complete')
    await pool.end()
  } catch (error) {
    console.error('❌ Seeding failed:', error)
    process.exit(1)
  }
}

seedDatabase()
