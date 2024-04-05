import React, {useEffect, useState, useCallback } from "react";
import { Product } from "../../components/product";
import "./home.css";

export const Home = () => {
    const [Products, setData] = useState([]);
    const [searchName, setSearchName] = useState('');
    const [searchCategory, setSearchCategory] = useState('');

    const fetchData = useCallback(async () => {
        let query = 'https://dummyjson.com/products';

        if (searchName) {
            query += `/search?q=${searchName}`;
        }
        else if (searchCategory) {
            query += `/category/${searchCategory}`;
        }
        console.log(query)
        const response = await fetch(query);
        const result = await response.json();
        setData(result.products || []);
    }, [searchName, searchCategory]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const name_assign = (event) => {
        setSearchName(event.target.value);
    };

    const category_assign = (event) => {
        setSearchCategory(event.target.value);
    };

    const handleSearch = () => {
        fetchData();
    };

    const [isFocused, setIsFocused] = useState(false);

    return (
        <div className="home">
            <div className={`searching_container ${isFocused ? 'darken' : ''}`}>
                <input
                    className="search-input name-search"
                    type="text"
                    placeholder="Search by name"
                    value={searchName}
                    onChange={name_assign}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    disabled={searchCategory && !searchName}
                />
                <input
                    className="search-input category-search"
                    type="text"
                    placeholder="Search by category"
                    value={searchCategory}
                    onChange={category_assign}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    disabled={searchName && !searchCategory}
                />
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <button className="search-button" onClick={handleSearch}>Search</button>
                </div>
            </div>
            {isFocused && <div className="overlay"></div>}

            <div className="products">
                {Products && Products.map((product) => (
                    <Product key={product.id} data={product} />
                ))}
            </div>
        </div>
    );
};
