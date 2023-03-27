            <div className="editContainer">
                {
                    Arr.map((id, character) => (
                        <button key={id} className={btnStyle} >
                            <Card changeStyle={changeStyle} element={character} />
                        </button>
                    ))
                }
            </div>