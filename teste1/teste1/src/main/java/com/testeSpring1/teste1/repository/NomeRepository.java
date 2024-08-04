package com.testeSpring1.teste1.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.testeSpring1.teste1.model.Nome;

public interface NomeRepository extends JpaRepository<Nome, Long> {

    
}
