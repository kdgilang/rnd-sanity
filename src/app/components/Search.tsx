export default function Search() {
  return (
    <div className="top-search-area">
      <div className="modal fade" id="searchModal" tabIndex={-1} role="dialog" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                  <div className="modal-body">
                    
                      <button type="button" className="btn close-btn" data-dismiss="modal"><i className="ti-close"></i></button>
                      
                      <form action="index.html" method="post">
                          <input type="search" name="top-search-bar" className="form-control" placeholder="Search and hit enter..." />
                          <button type="submit">Search</button>
                      </form>
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}