package com.testeSpring1.teste1.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.testeSpring1.teste1.model.Nome;
import com.testeSpring1.teste1.repository.NomeRepository;

import org.springframework.web.bind.annotation.*;





@RestController
@CrossOrigin(origins = "http://127.0.0.1:5500")
public class NomeController {
    @Autowired
    private NomeRepository nomeRepository;


    @GetMapping("/")
    public String index(Model model){
        model.addAttribute("nomes", nomeRepository.findAll());
        return "index";
    }
    @GetMapping("/api/nomes")
    public List<Nome> getNomes() {
        return nomeRepository.findAll();
    }

    @PostMapping("/add")
    public Nome addNome(@RequestBody Nome nome) {
    System.out.println("Recebido nome: " + nome.getNome());
    return nomeRepository.save(nome);
}


    @PostMapping("/delete")
    public String deleteNome(Long id){
        nomeRepository.deleteById(id);
        return "redirect:/";
    }

}
