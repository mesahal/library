package com.sahal.library.entity;


import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "book")
@Data
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "author")
    private String author;

    @Column(name = "description")
    private String description;

    @Column(name = "copies")
    private String copies;

    @Column(name = "copiesAvailable")
    private String copiesAvailable;

    @Column(name = "category")
    private String category;
    private String img;
}
