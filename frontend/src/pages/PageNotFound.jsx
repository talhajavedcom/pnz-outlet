import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <section className="trending-product section" style={{ marginTop: 12 }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <div class="error-area">
                <div class="d-table">
                  <div class="d-table-cell">
                    <div class="container">
                      <div class="error-content">
                        <h1>404 Error</h1>
                        <h2>Not Found!</h2>
                        <p>The page you are looking for does not exist.</p>
                        <div class="button">
                          <Link to="/" class="btn">Back to Home</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PageNotFound 