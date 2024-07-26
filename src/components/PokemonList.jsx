import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Container, Row, Col, Form } from 'react-bootstrap';

const PokemonList = () => {
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://pokeapi.co/api/v2/pokemon?limit=100');
      setPokemon(result.data.results);
    };
    fetchData();
  }, []);

  const filteredPokemon = pokemon.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container>
      <Form className="my-3">
        <Form.Control
          type="text"
          placeholder="Search Pokémon"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </Form>
      <Row>
        {filteredPokemon.map(p => (
          <Col xs={12} sm={6} md={4} lg={3} key={p.name} className="mb-4">
            <Card className="text-center">
              <Card.Img
                variant="top"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.url.split('/')[6]}.png`}
                alt={p.name}
              />
              <Card.Body>
                <Card.Title>{p.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PokemonList;
