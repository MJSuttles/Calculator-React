'use client';

import { useState } from 'react';
import { evaluate } from 'mathjs';
import { Button, Container, Row, Col } from 'react-bootstrap';

export default function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setResult(evaluate(input));
      } catch {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput((prev) => prev + value);
    }
  };

  return (
    <Container className="mt-5 text-center">
      <Row>
        <Col md={{ span: 4, offset: 4 }}>
          <div className="border p-3 bg-light">
            <h2 className="text-primary">Calculator</h2> {/* Title in blue */}
            {/* Ensure text is visible in the input area */}
            <div className="mb-2 p-2 bg-white text-dark border">{input || '0'}</div>
            {/* Ensure result text is visible */}
            <div className="mb-2 p-2 bg-white text-primary border">{result}</div>
            <Row>
              {['7', '8', '9', '/'].map((val) => (
                <Col key={val}>
                  <Button variant="dark" className="w-100" onClick={() => handleClick(val)}>
                    {val}
                  </Button>
                </Col>
              ))}
            </Row>
            <Row>
              {['4', '5', '6', '*'].map((val) => (
                <Col key={val}>
                  <Button variant="dark" className="w-100" onClick={() => handleClick(val)}>
                    {val}
                  </Button>
                </Col>
              ))}
            </Row>
            <Row>
              {['1', '2', '3', '-'].map((val) => (
                <Col key={val}>
                  <Button variant="dark" className="w-100" onClick={() => handleClick(val)}>
                    {val}
                  </Button>
                </Col>
              ))}
            </Row>
            <Row>
              {['0', '.', 'C', '+'].map((val) => (
                <Col key={val}>
                  <Button variant="dark" className="w-100" onClick={() => handleClick(val)}>
                    {val}
                  </Button>
                </Col>
              ))}
            </Row>
            <Row className="mt-2">
              <Col>
                <Button variant="primary" className="w-100" onClick={() => handleClick('=')}>
                  =
                </Button>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
